import sqlite3

# Connect to the database
conn = sqlite3.connect("test.db")

# Read and execute the SQL commands from init.sql
with open("../init.sql", "r") as f:
    conn.executescript(f.read())

# Commit changes and close the connection
conn.commit()
conn.close()

print("Database initialized successfully.")