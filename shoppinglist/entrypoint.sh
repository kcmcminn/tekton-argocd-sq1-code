#!/bin/bash
set -e

rm -f /shoppinglist/tmp/pids/server.pid

exec "$@"
