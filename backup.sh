#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="./backups"
mkdir -p $BACKUP_DIR

echo "🔄 Backup MongoDB en cours..."
docker exec mongodb_portfolio mongodump \
  --db portfolio \
  --archive \
  --gzip > $BACKUP_DIR/portfolio_$DATE.gz

echo "✅ Backup terminé : $BACKUP_DIR/portfolio_$DATE.gz"
ls -lh $BACKUP_DIR/
