#include <stdio.h>
#include <string.h>
#define Acc 3
typedef struct struct_Account{
    char password[15];
    char name[100];
    unsigned int id;
    int incrementator;
}Account;
Account Accounts[3];
int current_index=0;
void addAccount(){
    if(current_index<Acc){
    printf("\n Enter name:");
    scanf("%s",&Accounts[current_index].name);
    getc(stdin);
    Accounts[current_index].id=current_index;
    char name[100];
    strcpy(name,Accounts[current_index].name);
    char letter=name[0];
    Accounts[current_index].incrementator=letter-Accounts[current_index].id;
    while(1){
        int flag=1;
        printf("\n Enter password:");
    scanf("%s",&Accounts[current_index].password);
    int lenght=strlen(Accounts[current_index].password);
    if(lenght<8){
        printf("Enter your password again");
    }
    char password[100];
    strcpy(password,Accounts[current_index].password);
    for(int i=0;i<lenght;i++){
        char firstCharachter=password[i];
        int flag1=0
        if(firstCharachter>=30&&firstCharachter<=39){
            flag1=1;
        }
        int flag2=0;
        if(firstCharachter>=97&&firstCharachter<=122){
            flag2=1;
        }
    }
 else{
     flag=1;
 }
    if (flag==1&&flag1==1&&flag2==1) {
        break;
    }
    }
    
    current_index++;
    }
}
void informationAccount(){
    for(int i=0;i<current_index;i++){
        printf("\nAccount name:%s",Accounts[i].name);
        printf("\n Account password:%s",Accounts[i].password);
        printf("\n Account id:%d",Accounts[i].id);

    }
}
void incrementation(){
    for(int i=0;i<current_index;i++){
     printf("\nAccount name:%s",Accounts[i].name);
        printf("\n Account password:%s",Accounts[i].password);
        printf("\n Account id:%d",Accounts[i].id);
         printf("\n Account id:%d",Accounts[i].incrementator);
    }
}
int main() {
    int option=0;
    while(option!=4){
        printf("\nEnter what you want to do:");
        printf("\nOption 1:View account information");
        printf("\nOption 2:Information+incrementation");
        printf("\nOption 3:Add Account");
        printf("\nOption 4:Exit the program");
        scanf("%d",&option);
        switch(option){
            case 1:informationAccount();break;
      case 2:incrementation();break;
            case 3:addAccount();break;
            case 4:break;
            default:printf("\nWrong choice of option.Try again");
        }
    }

    return 0;
}