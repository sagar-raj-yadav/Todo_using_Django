1.pip install virtualenv->just like package.json
2.pip install Django

# make new peoject in python
3.django-admin startproject myproject  (myproject ->any project name)

#
4.python manage.py startapp home
(home ke jaga koi bhi dusra naam ho sakta h)
(different modules create karne ke liye hum iska use karte h like authentication(login,signhup) ka alag module , and more)
(python manage.py startapp authentication)

iss module ko app bolte h and django ka app reuseable hota h

5.settings.py me jake ye likhna 
EXTERNAL_APPS=[
    "home",
    "accounts"
]

INSTALLED_APPS+=EXTERNAL_APPS
note->mera yaha 2 app hai(folder name) ,isliye maine home and accounts likhe h (tumahra jo hoga wo folder name likhna and new folder create karnege to yaha uska naam add karte rahna)


6.python manage.py runserver -> to run the server

Note:agar mera main project ka folder name myproject hai to uske andar bhi myproject se hi new folder create hoga (andar wala ka naam change mat karna)

6.views->UI ka code
7.urls->routing
8.agar backend server se data views(index.html) or frontend me bhejna hai to hum "context" ke through bhejenge.

9.models me kuch  changes ye new model add karne ke baad migration command run karna hoga 
(python manage.py makemigrations)

isko run karne ke baad mujhe ek file milega "0001_initial.py" , iske andar 2 chij bhut important hai "dependencies and opeartions " . 
suppose maine apne student model me kuch change kiya,     address=models.TextField(null=True,blank=True)
then run this command  python manage.py makemigrations ,ek aur new file ban jayega "0002_alter_student address" ,
iss file ke andar ye hai.
    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='students',
            name='address',
            field=models.TextField(blank=True, null=True),
        ),
    ]

agar hum "0001_initial"  ye file delete kar dete hai to humara database collapse kar jata h.

suppose agar "0001_initial" ye file delete ho gya to iska kya solution hai?
=>"0001_initial" ye file abhi bhi database me present hai ,mujhe manually sync krna hoga.(django "0001_initial" file ko database me save karke rakhta h)
steps-> 
i)New migration file generate karein: (python manage.py makemigrations)
ii)Migration ko "fake" apply karein, kyunki 0001_initial ke tables database me already hain:(python manage.py migrate --fake)
--fake ka matlab hai ki Django sirf migration history ko update karega bina actual database changes kiye.

10.
python manage.py migrate tab likhte hain jab tumhe apne migrations ko database me apply karna hota hai.

But,
python manage.py makemigrations ->ye sirf migration file banata hai and jab koi new changes hoga model me to new migration file banata hai .(ye mugration database me save nhi hota)

example->suppose tumne model me age field add kiya to pehle new migration file banega jisme ye dikhega ko tumne age field add kiya h(python manage.py makemigrations) ,fir age field ko database  me save karne ke liye migrate karna hoga (python manage.py migrate)

python manage.py makemigrations->jo changes hua h uska migartion file banega.
python manage.py migrate->jo changes hua h model me usko database me save karne ke liye

11. jab model me change karte h to django ko pata kaise chalta h ki kuch changes hua h ?
=>step.1->jab bhi tm model banate ho to (python manage.py makemigrations) ye command run karte hai and migration file ban jata h and django iss migration ka snapshot save kar leta h
step.2->jab model me change kiya and fir se ye cmmand run karnege (python manage.py makemigrations) , to djnago last wala migration ka snapshot se current migration ko compare karega and new changes ko add karega and ab iss migration ka snapshot ko save karega .

simply,django last migration snapshot ko current migration se compare karta h.

11.DJANGO REST FRAMEWORK ->helps to make an rest api
(pip install djangorestframework)