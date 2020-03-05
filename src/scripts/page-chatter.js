/* global window */

let handlers,
    originalHandler;

// Function to initialize page-chatter
export const init = () => {
    // Store the original event handler as one of the many
    originalHandler = window.onmessage;

    // Initialize the handlers collection
    handlers = {};

    // Set up a global event handler for all messages
    window.onmessage = message => {
        // Extract information about the message
        const { data } = message;
        const {
            to: recipient,
            event,
            payLoad
        } = data;

        // Pass as a message or a broadcast
        if (recipient) {
            // Find the recipient's event handler
            const handler = Object.keys(handlers).filter(k => k === recipient)[0];

            // Pass the message to the correct recipient, if any
            if (handler) {
                handlers[handler]({
                    event,
                    payLoad
                });
            }
        } else {
            // Broadcast the message to all participants
            Object.keys(handlers)
                .forEach(
                    k => {
                        handlers[k]({
                            event,
                            payLoad
                        });
                    }
                );
        }

        // Also pass the message to the original event handler, if any
        if (originalHandler) {
            originalHandler(message);
        }
    };
};

// Function to subscribe to events for self
export const listen = (id, handler) => {
    // Append the handler to the list of handlers, against the id
    handlers[id] = handler;
};

// Function to talk to other participants
export const talk = (to, event, payLoad) => {
    // Post message to the chatter
    window.postMessage(
        {
            to,
            event,
            payLoad
        },
        '*'
    );
};

// Function to broadcast message to all participants
export const broadcast = (event, payLoad) => {
    // Post message to the chatter
    window.postMessage(
        {
            event,
            payLoad
        },
        '*'
    );
};

// Function to terminate chatter
export const terminate = () => {
    // Restore the original handler
    window.onmessage = originalHandler;

    // Reset the handlers collection
    handlers = {};
};

export default {
    init,
    listen,
    talk,
    terminate
};
