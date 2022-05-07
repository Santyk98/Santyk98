import getpass
import re

def main():
  print("Select an Option\n")
  print("1.Login\n")
  print("2.Register\n")
  user=input("select a option:")
  if user in ['1']:
    Login()
  elif user in ['2']:
    register()
  else:
    print("Incorrect Option")

def register():
  print("\nRegister:")
  print("\n1.EmailID\n2.Username")
  user=input("select a option:")
  if user in ['1']:
    userName=input("Enter your EmailID:")
    while True:
        pat = "^[a-zA-Z0-9-_]+@[a-zA-Z0-9]+\.[a-z]{1,3}$"
        if re.match(pat,userName):
          print("Valid Email ID")
          break
        else:
          print("Incorrect Email ID")
          register()
          break
  elif user in ['2']:
    userName=input("Enter your Username:")

  while True:
    Password=input("Enter the password")

    reg = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{6,20}$"
    
    p = re.compile(reg)
    match = re.search(p, Password)
    
    if match:
      ConfirmPassword=input("Re-enter the password:")
      while True:
        if Password==ConfirmPassword:
          break
        else:
          print("Password is not match")
          register()
          break
      break
    else:
        print("Password invalid !!")
        register()
        break
        if userAlreadyExist(userName, Password):
            while True:
                print()
                error = input("You Are Already Registered.\n\nPress (T) To Try Again:\nPress (L) To Login: ").lower()
                if error == 't':
                    register()
                    break
                elif error == 'l':
                    Login()
                    break
        addUserInfo([userName,Password])

        print()
        print("Registered!")
        break
def Login():
   print("LOGIN")
   usersInfo = {}
   with open('userInfo.txt', 'a+') as file: 
     for line in file: 
            line = line.split() 
            usersInfo.update({line[0]: line[1]})
            while True:
              userName = input("Enter Your Name: ")
              userName = sanitizeName(userName)
              if userName not in usersInfo:
                print("You Are Not Registered")
                print()
            else:
              break
            while True:
              Password = getpass("Enter Your Password: ")
              if not check_password(Password, usersInfo[userName]):
                  print("Incorrect Password")
              else:
                  break
            print()
            print("Logged In!")

def addUserInfo(userInfo: list):
    with open('userInfo.txt', 'a') as file:
        for info in userInfo:
            file.write(info)
            file.write(' ')
        file.write('\n')

def userAlreadyExist(userName,Password=None):
    if Password == None:
        with open('userInfo.txt', 'r') as file:
            for line in file:
                line = line.split()
                if line[0] == userName:
                    return True
        return False
    else:
        Password = Password(Password)
        usersInfo = {}
        with open('userInfo.txt', 'r') as file:
            for line in file:
                line = line.split()
                if line[0] == userName and line[1] ==Password:
                    usersInfo.update({line[0]: line[1]})
        if usersInfo == {}:
            return False
        return usersInfo[userName] ==Password

def displayUserAlreadyExistMessage():
    while True:
        print()
        error = input("You Are Already Registered.\n\nPress (T) To Try Again:\nPress (L) To Login: ").lower()
        if error == 't':
            register()
            break
        elif error == 'l':
            Login()
            break

def sanitizeName(userName):
    userName = userName.split()
    userName = '-'.join(userName)
    return userName
