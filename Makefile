build:
	@spm build

deploy:
	@rm -rf sea-modules/seaui/alert
	@mkdir  sea-modules/seaui/alert
	@mkdir  sea-modules/seaui/alert/1.0.0
	@cp     dist/*.* sea-modules/seaui/alert/1.0.0
	@echo
	@echo   " deploy to sea-modules/seaui/alert/1.0.0"
	@echo