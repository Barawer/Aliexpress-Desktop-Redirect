Aliexpress-Desktop-Redirect.zip: *.json *.js img/* *.md *.txt
	zip -r Aliexpress-Desktop-Redirect.zip * -x .git/* -x img/screenshot.png -x .gitignore -x Makefile

clean:
	rm *.zip
