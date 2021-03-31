import { Logger } from "./mod.ts";

var logger = new Logger("mytag", true);

logger.info("Info");
logger.warn("Warning");
logger.err("Error");
logger.debug("Debug");