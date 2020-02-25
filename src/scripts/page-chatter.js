/* global window */

let handlers;

// Function to initialize page-chatter
export const init = () => {
    // Store the original event handler as one of the many
    handlers = {
        original: window.onmessage
    };

    // Set up a global event handler for all messages
    window.onmessage = ({ data }) => {
        // Extract information about the message
        const {
            to: recipient,
            event,
            payLoad
        } = data;

        // Find the recipient's event handler
        const handler = Object.keys(handlers).filter(k => k === recipient)[0];

        // Pass the message to the correct recipient, if any
        if (handler) {
            handlers[handler]({
                event,
                payLoad
            });
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
    window.postMessage({
        to,
        event,
        payLoad
    });
};

// Function to terminate chatter
export const terminate = () => {
    // Restore the original handler
    window.onmessage = handlers.original;

    // Reset the handlers collection
    handlers = {};
};

export default {
    init,
    listen,
    talk,
    terminate
};
