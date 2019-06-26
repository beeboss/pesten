#!/bin/sh

i=0
while [ $i -lt 54 ] ; do
  echo -n "\"c${i}.png\","
  i=`expr $i + 1`
done
