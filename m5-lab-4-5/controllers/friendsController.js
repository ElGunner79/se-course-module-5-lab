// TODO - #5: Move all logic out into a controller with functions for finding, filtering, info, adding and updating

const friends = require('../models/friends')

const friendsAll = (req, res) => {
    res.json(friends)
}

const friendFilter = (req, res) => {
    console.log(req.query)
    let filterGender = req.query.gender;
    let filterLetter = req.query.letter;

    let matchingFriends = [...friends];

    if (filterGender) {
        matchingFriends = matchingFriends.filter(friend => friend.gender == filterGender);
    }

    if (filterLetter) {
        matchingFriends = matchingFriends.filter(friend => friend.name.toUpperCase().startsWith(filterLetter.toUpperCase()));
    }

    if (matchingFriends.length > 0) {
        // return valid data when the gender matches 
        res.status(200).json(matchingFriends)
    } else {
        // and an error response when there are no matches
        res.status(404).json({ error: `No friends matching gender ${filterGender} and starting letter ${filterLetter}` })
    }

}

const friendInfo = (req, res) => {
    console.log(req.headers)

    // Modify this response to just return info on the user-agent, content-type and accept headers
    res.json({
        'user-agent': req.headers['user-agent'],
        'content-type': req.headers['content-type'],
        accept: req.headers.accept
    })
}

const friendId = (req, res) => {
    console.log(req.params)
    let friendId = req.params.id; // 'id' here will be a value matching anything after the / in the request path

    // Modify this function to find and return the friend matching the given ID, or a 404 if not found
    let matchedFriend = friends.find(friend => friend.id == friendId)

    // Modify this response with the matched friend, or a 404 if not found
    matchedFriend
        ? res.status(200)
            .json({ result: `Friend #${friendId} found`, data: matchedFriend })
        : res.status(404).json({ result: `Friend #${friendId} not found` })
}

const friendAdd = (req, res) => {
    let newFriend = req.body; // FIRST add this line to index.js: app.use(express.json());
    console.log(newFriend) // 'body' will now be an object containing data sent via the request body

    // we can add some validation here to make sure the new friend object matches the right pattern
    if (!newFriend.name || !newFriend.gender) {
        res.status(500)
            .json({ error: 'Friend object must contain a name and gender' });
        return;
    }
    else if (!newFriend.id) {
        newFriend.id = friends.length + 1; // generate an ID if one is not present
    }

    // if the new friend is valid, add them to the list and return the successfully added object
    friends.push(newFriend)
    res.status(200).json(newFriend)
}

const friendUpdate = (req, res) => {
    let friendId = req.params.id;
    let updatedFriend = req.body;

    // Replace the old friend data for friendId with the new data from updatedFriend
    let oldFriend = friends.find(friend => friend.id == friendId)

    if (oldFriend) {
        let oldFriendIndex = friends.indexOf(oldFriend);
        updatedFriend = { ...oldFriend, ...updatedFriend };
        friends[oldFriendIndex] = updatedFriend;

        // Modify this response with the updated friend, or a 404 if not found
        res.status(200).json({ result: 'Updated friend with ID ' + friendId, data: updatedFriend })
    }
    else {
        // Modify this response with the updated friend, or a 404 if not found
        res.status(404).json({ result: 'No friend with ID ' + friendId })
    }
}

module.exports = {
    friendsAll,
    friendFilter,
    friendInfo,
    friendId,
    friendAdd,
    friendUpdate
}

//update