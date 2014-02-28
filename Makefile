build:
	@spm build

deploy:
	@rmdir /S /Q sea-modules\seaui\alert
	@md  sea-modules\seaui\alert
	@md  sea-modules\seaui\alert\1.0.0
	@copy     dist\*.* sea-modules\seaui\alert\1.0.0 /y