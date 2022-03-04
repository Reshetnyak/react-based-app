/**
 * Enum-like list of issue types.
 * The order is important. Statuses can be moved only from higher one to lower.
 * @type {Readonly<{Open: string, Pending: string, Closed: string}>}
 */
export const StatusType = Object.freeze({
    Open: 'Open',
    Pending: 'Pending',
    Closed: 'Closed',
});

/**
 * Texts for each issue type
 * @type {Readonly<{[p: StatusType]: string}>}
 */
export const StatusTypeTextMap = Object.freeze({
    [StatusType.Open]: 'open',
    [StatusType.Pending]: 'pending',
    [StatusType.Closed]: 'closed',
});

/**
 * @typedef {Object} Status
 * @property {StatusType} status - type of an issue
 * @property {string} text - corresponding type text
 * @property {StatusType} next - next allowed type of an issue
 */

/**
 * Statuses sequence
 * @type {Status[]}
 */
export const statuses = Object.keys(StatusType)
    .reduce((acc, status, i, sequence) => {
        acc[StatusType[status]] = {
            status: StatusType[status],
            text: StatusTypeTextMap[status],
            next: sequence[i + 1]
        };
        return acc;
    }, {});

/**
 * Get status object by issue type
 * @param {StatusType} type - type of issue status
 * @returns {Status}
 */
export const getStatus = type => statuses[type];

/**
 * Get next allowed status object by issue type
 * @param {StatusType} type - type of issue status
 * @returns {Status}
 */
export const getNextStatus = type => {
    const next = statuses[type].next;
    return statuses[next];
};
