def countSort(arr):
    
    size = len(arr)
    limit = int(size/2)
    phrase = [[] for i in range(limit+2)]
    
    for i in range(size):
        if(i < limit):
            phrase[int(arr[i][0])].append("-")
        else:
            phrase[int(arr[i][0])].append(arr[i][1])
    
    for j in phrase:
        if len(j) != 0:
            print(*j, end=" ")

countSort([[1, 'e'], [2, 'a'], [1, 'b'], [3, 'a'], [4, 'f'], [1, 'f'], [2, 'a'], [1, 'e'], [1, 'b'], [1, 'c']])