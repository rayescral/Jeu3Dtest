#!/bin/bash
# Double-clic pour lancer Tennis Club Simulator (macOS).
cd "$(dirname "$0")"
if command -v python3 >/dev/null 2>&1; then PY=python3
elif command -v python >/dev/null 2>&1; then PY=python
else
  echo "Python n'est pas installé. La page de téléchargement va s'ouvrir."
  open "https://www.python.org/downloads/"
  read -r -p "Appuie sur Entrée pour fermer."
  exit 1
fi
echo ""
echo "  Tennis Club Simulator"
echo "  Le jeu s'ouvre dans ton navigateur : http://localhost:8000"
echo "  Laisse cette fenêtre ouverte pendant que tu joues (Ctrl + C pour arrêter)."
echo ""
(sleep 2; open "http://localhost:8000") &
"$PY" -m http.server 8000
