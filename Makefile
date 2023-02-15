DEST?=dist
ENV?=dev
dev:
	BROWSER='google chrome' env PROXY_ENV=${ENV} node_modules/.bin/vite

clear:
	rm -rf ${DEST}/*

build: clear
	node_modules/.bin/tsc && node_modules/.bin/vite build --outDir ${DEST}
	git describe --tags --always --long > ${DEST}/VERSION

lint:
	node_modules/.bin/eslint --ext .js,.jsx,.ts,.tsx --fix --quiet ./

install:
	pnpm i

tar:
	rm -f react-project-*.tar.gz && tar --exclude="dist/.DS_Store" -zcvf react-project-$(shell git describe --tags --long)-$(shell date "+%Y%m%d").tar.gz dist
