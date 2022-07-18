if [$# == 0] 
then
  echo "No argument supplied"
else
  for i in $@ 
  do 
    mkdir "ex"$i 
  done
fi