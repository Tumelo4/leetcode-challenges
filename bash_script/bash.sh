#! /bin/bash

read -p "Enter command: " command

if [ -z "$command" ]; then
    echo "command can't be empty"
    exit 1
fi

start_time=$(date +%s%3N)
eval $command
end_time=$(date +%s%3N)
echo "Execution time: $((end_time - start_time))ms"