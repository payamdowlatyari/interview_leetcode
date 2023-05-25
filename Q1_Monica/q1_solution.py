def my_func(input):
    
    # init
    n = len(input)
    Max_T = 100
    max_pass = [0] * n
    
    # main code
    # loop through all posible start points:
    for i in range(n):
        # for each start point, find out how many times we can pass the bowl
        energy = list(input)
        # print("energy",energy)
        giver = i
        for T in range(0,Max_T):
            # assign the taker
            if giver == n-1:
                taker = 0
            else:
                taker = giver + 1
            # pass the bowl
            if energy[giver] != 0:
                energy[giver] -= 1
            else:
                max_pass[i] = T
                break
            # assign the current taker and the next giver
            giver = taker 

    return max(max_pass)

# test case/input
print(f"Expected return: 4 Function return: {my_func([2, 1, 1])}")
print(f"Expected return: 1 Function return: {my_func([0, 5, 0])}")
print(f"Expected return: 3 Function return: {my_func([3, 0, 2, 1])}")


