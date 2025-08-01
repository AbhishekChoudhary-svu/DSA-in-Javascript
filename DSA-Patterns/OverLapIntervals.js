// ✅ Merge Intervals
var merge = function(intervals) {
    if (intervals.length === 0) return [];

    // Sort intervals by starting time
    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        const last = merged[merged.length - 1];
        const current = intervals[i];

        if (current[0] <= last[1]) {
            // Overlapping intervals, merge them
            last[1] = Math.max(last[1], current[1]);
        } else {
            // No overlap, add to result
            merged.push(current);
        }
    }

    return merged;
};

// ✅ Insert Interval
var insert = function(intervals, newInterval) {
    if (intervals.length === 0) return [newInterval];

    // Add new interval and sort
    intervals.push(newInterval);
    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        const last = merged[merged.length - 1];
        const current = intervals[i];

        if (current[0] <= last[1]) {
            // Overlap - merge
            last[1] = Math.max(last[1], current[1]);
        } else {
            // No overlap - push
            merged.push(current);
        }
    }

    return merged;
};

// ✅ Erase Overlapping Intervals
var eraseOverlapIntervals = function(intervals) {
    if (intervals.length === 0) return 0;

    // Sort by end time to keep as many non-overlapping intervals as possible
    intervals.sort((a, b) => a[1] - b[1]);

    let count = 0;
    let prevEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < prevEnd) {
            // Overlap - remove this one
            count++;
        } else {
            // No overlap - update end
            prevEnd = intervals[i][1];
        }
    }

    return count;
};
