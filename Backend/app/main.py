from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import blog, projects, header

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(blog.router, prefix="/api/blog", tags=["Blog"])
app.include_router(projects.router, prefix="/api/projects", tags=["Projects"])
app.include_router(header.router, prefix="/api/header", tags=["Header"])

@app.get("/")
def read_root():
    return {"message": "FastAPI backend running"}
