#!/bin/sh

DOCS_USER=${DOCS_USER:-rosdocs}
DOCS_HOST=${DOCS_HOST:-docs.ros.org}
DOCS_PATH=${DOCS_PATH:-/var/www/docs.ros.org}
DEPLOY_ARCHIVE=${DEPLOY_ARCHIVE:-docs-landing-page.tar.gz}

scp ${SSH_ARGS} ${DEPLOY_ARCHIVE} ${DOCS_USER}@${DOCS_HOST}:${DOCS_PATH}
ssh -T ${SSH_ARGS} ${DOCS_USER}@${DOCS_HOST} tar -C ${DOCS_PATH} -zxf ./${DEPLOY_ARCHIVE}
