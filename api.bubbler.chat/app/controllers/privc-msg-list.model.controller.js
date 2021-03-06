// Private chat messages list model controller
const db = require('../models');
const PrivCMsgList = db.privCMsgLists;

exports.createPrivCMsgList = async (obj, res) => {
	var privCMsgList = new PrivCMsgList(obj);
	return await privCMsgList.save()
		.catch(err => {
			res.status(500).send({ message: err });
		});
};

exports.findOnePrivCMsgList = async (id, res) => {
	return await PrivCMsgList.findById(id)
		.then(list => {
			try{
				if (!list) throw 'Messages list not found';
				return list
			} catch {
				return false;
			}
		})
			.catch(err => {
				res.status(500).send({ message: err });
			});
};

exports.findOneAndUpdatePrivCMsgList = async (id, obj, res) => {

	return await PrivCMsgList.findByIdAndUpdate(id, obj, { new: true, useFindAndModify: false })
		.then(privCMsgList => {
			try {
				if (!privCMsgList) throw 'Private chats messages list not found.';
				return privCMsgList;
			} catch (err) {
				return false;
			}
		})
			.catch(err => {
				res.status(500).send({ message: err });
			});
};
