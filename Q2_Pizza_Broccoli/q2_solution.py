def my_func(input):

    # auxilary functions
    def count_ones(food_string):
        count_f = 0
        max_count_f = 0
        for char in food_string:
            if char == '1':
                count_f += 1
                if count_f > max_count_f:
                    max_count_f = count_f
            else:
                count_f = 0
        return max_count_f
    
    # init
    k = input[0]
    food_string = list(input[1])
    N = len(food_string)
    count = 0
    max_count = 0

    # main code
    for i in range(N):
        # reset the value of the string
        food_string = list(input[1])
        # search through the string to find a 0
        if food_string[i] == '0':
            food_string[i]='1'
            # change the neighbours of that 0 to 1
            for j in range(1,k):
                if i+j < N-1 :
                    food_string[i+j]='1'
            # count the number of consecutive 1s for this modified string
            count = count_ones(food_string)
            # update the max count if this modified string is the best one
            if count > max_count:
                max_count = count
                # print(food_string)
        else:
            continue

    return max_count

# test case/input
print(f"Expected return: 5 Function return: {my_func([2,'0101110000101'])}")
print(f"Expected return: 4 Function return: {my_func([3,'100001'])}")

