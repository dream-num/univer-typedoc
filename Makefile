CR = univer-acr-registry.cn-shenzhen.cr.aliyuncs.com
LOCAL_TAG = dev
PUSH_TAG ?= latest
REPOSITORY = univer-typedoc
NS ?= univer
CTR = docker
BUILDER ?= univerdocs-builder

OSARCH = linux/amd64

.PHONY: create_builder
# Check if the builder exists and create it if not
create_builder:
	@if ! $(CTR) buildx inspect $(BUILDER) > /dev/null 2>&1; then \
		$(CTR) buildx create --name $(BUILDER) --use; \
	fi

.PHONY: push_image
# Build and Push multi-platform Docker images for univer docs
push_image: create_builder
ifeq ($(PUSH_TAG), latest)
	$(eval image_tag=-t $(CR)/$(NS)/$(REPOSITORY):latest)
else
	$(eval image_tag=-t $(CR)/$(NS)/$(REPOSITORY):$(PUSH_TAG) -t $(CR)/$(NS)/$(REPOSITORY):latest) 
endif
	$(CTR) buildx build \
	--builder $(BUILDER) \
	--platform $(OSARCH) \
	--file Dockerfile \
	$(image_tag) \
	--push .

.PHONY: test_image_run
test_image_run: create_builder 
ifeq ($(PUSH_TAG), latest)
	$(eval image_tag=-t $(CR)/$(NS)/$(REPOSITORY):latest)
else
	$(eval image_tag=-t $(CR)/$(NS)/$(REPOSITORY):$(PUSH_TAG)) 
endif
	$(CTR) run --rm -it -p 8001:80 $(image_tag)

.PHONY: get_image_tag
get_image_tag:
ifeq ($(UNIVER_CLONE_ROOT),)	
	$(error UNIVER_CLONE_ROOT is not set)
endif
	$(eval IMAGE_TAG=$(shell cat $(UNIVER_CLONE_ROOT)/package.json | grep '"version":' | head -1 | awk -F '"' '{print $$4}'))
	$(eval IMAGE_TAG=$(IMAGE_TAG)-$(shell git -C $(UNIVER_CLONE_ROOT)/ rev-parse --short HEAD))

.PHONY: echo_image_tag
echo_image_tag: get_image_tag
	@echo "$(IMAGE_TAG)"

.PHONY: check_image_exists
# Check if the image exists
check_image_exists: get_image_tag
	@echo $(shell docker manifest inspect $(CR)/$(NS)/$(REPOSITORY):$(IMAGE_TAG) > /dev/null 2>&1 && echo true || echo false)
