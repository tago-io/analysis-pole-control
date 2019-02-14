# Executables
TAGO_BUILDER    = ./node_modules/.bin/tago-builder

build:
	@echo "\n---| Building Pole Scripts |---"
	@tago-builder project/handler.js build/handler.js.tago.js
	@tago-builder project/pitchControl.js build/pitchControl.js.tago.js
	@tago-builder project/weatherControl.js build/weatherControl.js.tago.js

.PHONY: build
