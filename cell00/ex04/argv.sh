COUNT=0
if [ $# == 0 ]
then
  echo "No argument"
else
  for i in $@
  do
    if [ $COUNT == 3 ]
    then
      break
    fi
    echo $i
    COUNT=$((COUNT+1))
  done
fi