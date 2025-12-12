from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
import csv
import os

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_csv_filename():
    today = datetime.now().strftime("%Y-%m-%d")
    return f"task_tracker_{today}.csv"



def load_tasks():
    filename = get_csv_filename()

    if not os.path.exists(filename):
        return []  # no tasks yet

    tasks = []
    with open(filename, mode="r") as file:
        reader = csv.DictReader(file)
        for row in reader:
            tasks.append(row["task"])
    return tasks



def save_tasks(tasks):
    filename = get_csv_filename()

    with open(filename, mode="w", newline="") as file:
        writer = csv.writer(file)
        writer.writerow(["task"])  # header
        for task in tasks:
            writer.writerow([task])



@app.post("/add-task")
def add_task(task: str):
    tasks = load_tasks()
    tasks.append(task)
    save_tasks(tasks)
    return {"message": "Task added successfully", "tasks": tasks}



@app.get("/tasks")
def get_tasks():
    tasks = load_tasks()
    return {"tasks": tasks}
