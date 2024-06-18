# Waterlog
> A logging library for Deno.
Basically, a TS port of vala-console.
## Usage
Waterlog provides the `Logger` class, which is used for all logging functionality.
Import it this way:
```shell
$ deno add @asr/waterlog
```
```typescript
import { Logger } from "@asr/waterlog"
```
To instantiate a `Logger`, use the `new Logger(tag: string, isDebug?: boolean)` constructor, where `tag` is the tag to use for logging (e.g. the routine name), and `isDebug` is whether to print debug messages (defaulting to `false`).

Then, you can log using the `info`, `warn`, `err`, and `debug` methods. Each takes a single argument, a message, which has to be a string. They then print it out with colors (run `test.ts` for an example). Messages from `debug` are only printed if `isDebug` is set to true.

## Example
Taken from `test.ts`:
```typescript
import { Logger } from "@asr/waterlog";

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
```
