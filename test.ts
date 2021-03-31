import { Logger } from "https://deno.land/x/waterlog/mod.ts";

// Create a new Logger object, with a tag of 'mytag' and debug messages
var logger = new Logger("mytag", true);

// Print an info message
logger.info("Info");

// Print a warning message
logger.warn("Warning");

// Print an error message
logger.err("Error");

// Print a debug message
logger.debug("Debug");