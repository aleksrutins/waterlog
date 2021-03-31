import { dim, cyan, red, yellow } from "https://deno.land/std@0.91.0/fmt/colors.ts";

export class Logger {
    /**
     * Constructs a new logger.
     * @param tag Tag to use for logging (e.g. class name, routine, etc.)
     * @param isDebug Whether to print debug messages.
     */
    constructor(private tag: string, public isDebug: boolean = false) {

    }
    
    /**
     * Prints an info message.
     * @param msg Message to print
     */
    info(msg: string) {
        console.log(`${dim(`[${this.tag}:info]`)} ${msg}`);
    }

    /**
     * Prints a warning message.
     * @param msg Message to print
     */
    warn(msg: string) {
        console.log(`${dim(yellow(`[${this.tag}:warn]`))} ${msg}`);
    }

    /**
     * Prints an error message.
     * @param msg Message to print
     */
    err(msg: string) {
        console.log(`${dim(red(`[${this.tag}:err]`))} ${msg}`);
    }

    /**
     * Prints a debug message, if isDebug is set to true.
     * @param msg Message to print
     */
    debug(msg: string) {
        if(this.isDebug == true) console.log(`${dim(cyan(`[${this.tag}:debug]`))} ${msg}`);
    }
}