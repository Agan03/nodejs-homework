import EventEmitter from 'events';
import chalk from 'chalk';

const eventEmitter = new EventEmitter();


eventEmitter.on('Red', () => {
     console.clear();
    console.log(chalk.bgRed(`Light is:Red`));
    setTimeout(()=>{eventEmitter.emit(`Yellow`);},3000);
});

eventEmitter.on('Yellow', () => {
     console.clear();
    console.log(chalk.bgYellow(`Light is:Yellow`));
    setTimeout(()=>{eventEmitter.emit(`Green`);},3000);
});

eventEmitter.on('Green', () => {
     console.clear();
    console.log(chalk.bgGreen(`Light is:Green`));
    setTimeout(()=>{eventEmitter.emit(`Red`);},3000);
});


eventEmitter.emit(`Red`);