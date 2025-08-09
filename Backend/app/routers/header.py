from fastapi import APIRouter
import json
from pathlib import Path

router = APIRouter()
file_path = Path(__file__).parent.parent / "data" / "heading.json"

@router.get("/")
def get_headings():
    with open(file_path, "r", encoding="utf-8") as f:
        return json.load(f)
