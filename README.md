
# Pico Y Placa Predictor
A console aplication that in base of a plate license number, the date and time you want to be on road, tells you if the car can be on road.

The aplication take into account license plates with exception (taxis, buses, diplomatic service vehicles and temporary hospitalization vehicles) also take into account holidays where the pico y placa does not apply (The holiday dates in the aplication are general holidays dates, so depending the year you are going to enter on the aplication, there may be different vacation dates than those of the program).


## Architecture
The aplication was made with: 

Node js v16.15.1

Jest for unit test


## Run Locally

Clone the project

```bash
  git clone https://github.com/RicardoHaroM/PicoYPlaca.git
```

Go to the project directory

```bash
  cd PicoYPlaca
```

Start the program

```bash
  npm run start
```


## Running Tests

Install dependencies

```bash
  npm install
```

To run tests, run the following command

```bash
  npm run test
```

## Usage
- Once the program is running you need to enter the plate license number, the date and time you want to be on road following the next format: XXX-0000 MM-DD-YYYY HH:HH. Ex: PCW-8909 07-22-2022 18:00 and will receive a answer if you can be on road or not

- You can also enter license plates with 2 letters or with 3 numbers.

- The format for the time is in hours. Ex: 18:00.

- If you need to enter a time hour less than 10 o'clock you must add a 0 in the beginning. Ex: 04:00

- If you want to change the holiday dates, the plates restricted in a day, the restricted hours or the letters of exempt plates, you can find this constants in the const folder. 

## Authors

- [@RicardoHaro](https://github.com/RicardoHaroM)

