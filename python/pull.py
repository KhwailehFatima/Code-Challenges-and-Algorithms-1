# Don't Edit
import subprocess
import sys

topic = sys.argv[1]
number = sys.argv[2]

subprocess.call(['bash', './bin/shell.sh', topic, number])