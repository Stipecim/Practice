def statement_control(finput, sinput, tinput):  # function that takes 3 input arguments in parameter
    if finput == sinput and finput == tinput:  # checks if all inputs are equal
        print("all numbers are equal")  # prints if numbers are equal
    elif finput != sinput and finput != tinput and sinput != tinput:  # same thing checks if numbers are not equal
        print("all numbers are different")  # prints
    else:  # if anything else than stated above do different
        print("Neither all are equal or different")


def statement_control2(finput, sinput, tinput):  # same like function above only thing with this is that checks
    if finput < sinput > finput < tinput:           # if values are greater or lower than
        print("Increasing order.")
    elif finput > sinput < finput > tinput < sinput < tinput:
        print("Decreasing order.")
    else:
        print("Neither Increasing or decreasing order.")


def python_loops(fib):
    fnum = 0
    snum = 1

    print(fnum, snum, " ")

    fib -= 2

    while fib > 0:

        print(fnum + snum, " ")
        temp = snum
        snum = fnum + snum
        fnum = temp
        fib -= 1


def python_loops2(num):
    for x in range(11):
        print(num, "*", x, " = ", num * x)


def python_collections(listarr):
    import math
    print("Avreage sum of list is: ", math.ceil(sum(listarr) / len(listarr) * 100) / 100)


def python_collections2(listarr2):
    # prints list in array
    for x in range(len(listarr2)):

        if x == (len(listarr2) - 1):
            print(listarr2[x], "]")
            break
        elif x == 0:
            print("Original List: [", end=" ")

        print(listarr2[x], end=", ")

    print("Max value of list is: ", max(listarr2))  # quick way displaying min and max value using functions instead of
    print("Min value of list is: ", min(listarr2))  # loops


def python_functions(num):
    import math
    print("factorial of ", num, " is ", math.factorial(num))


def python_functions2(num):  # takes number as an argument
    for i in range(2, num):  # initialises i for increment range takes two arguments 2, number from function parameter
        if (num % i) == 0:  # number module i++ checks if number is prime or not
            print(num, "is not prime")
        else:
            print(num, "is Prime")
            break


# rock paper scissors
def rps(pchoice):   # takes players choice from ask input in main
    import random  # imports random library
    rpsl = ["rock", "paper", "scissors"]  # initialise rock paper scissors list
    opponent = random.choice(rpsl)
    if opponent == pchoice:
        return print("It's tie")

    # I work's similar to switch case like in java
    if pchoice == "rock":   # checks if player has rock
        if opponent == "scissors":  # check if opponent has scissors
            print("You won")
        else:
            print("You lost")
    if pchoice == "paper":
        if opponent == "rock":
            print("You won")
        else:
            print("You lost")
    if pchoice == "scissors":
        if opponent == "paper":
            print("You won")
        else:
            print("You lost")


if __name__ == '__main__':
    a = - 5 + 8 * 6

    b = (55 + 9) % 9

    c = 20 + -3 * 5 / 8

    d = 5 + 15 / 3 * 2 - 8 % 3
    print(a)
    print(b)
    print(c)
    print(d)

    statement_control2(1524, 2345, 3321)  # activity 1
    statement_control(2, 3, 4)   # activity 2
    python_loops(10)  # activity 1
    python_loops2(6)  # activity 2
    list1 = [20, 30, 25, 35, -16, 60, -100]   # activity 1
    python_collections(list1)
    list2 = [25, 14, 56, 15, 36, 56, 77, 18, 29, 49]   # activity 2
    python_collections2(list2)
    python_functions(7)
    python_functions2(7)

    while True:  # Rock Paper Scissors
        ask = input("Do you want to play rock paper scissors(Y/N):")
        if ask == "Y" or ask == "y":
            while True:
                ask = input("Choose Rock(rock), Paper(paper), Scissor(scissor):")
                if ask == "rock" or ask == "paper" or ask == "scissor":

                    rps(ask)
                    break
                else:
                    print("wrong input !!")
        elif ask == "N" or ask == "n":
            break
