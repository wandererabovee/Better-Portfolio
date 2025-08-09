from fastapi import APIRouter
import json
from pathlib import Path

router = APIRouter()

@router.get("/")
def get_projects():
    json_path = Path(__file__).parent.parent / "data" / "projects.json"
    with open(json_path, "r", encoding="utf-8") as f:
        return json.load(f)
