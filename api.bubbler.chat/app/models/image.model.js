module.exports = mongoose => {
	const Schema = mongoose.Schema;

	var imageSchema = new Schema(
		{	
			title: String,
			user: { type: Schema.Types.ObjectId, ref: 'User' },
			info: { type: Schema.Types.ObjectId, ref: 'Info' },
			location: { type: Schema.Types.ObjectId, ref: 'Location' },
			type: String, // instant, upload
			description: String,
			label: { type: Schema.Types.ObjectId, ref: 'Label' },
			edited: Boolean,
			url: String,
			source: String,
			quality: String,
			fileType: String,
			status: String, // ok, broken
			privacy: { type: Schema.Types.ObjectId, ref: 'Privacy' },
			tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
			taggedUsers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
			reactions: [{ type: Schema.Types.ObjectId, ref: 'Reaction' }],
			shares: [{ type: Schema.Types.ObjectId, ref: 'Share' }],
			comments: { type: Schema.Types.ObjectId, ref: 'Comments' }
		},
	  	{ 
	  		timestamps: 
	  		{ 
	  			createdAt: 'createdAt', 
	  			updatedAt: 'updatedAt',
	  			publishedAt: Date,
	  			deletedAt: Date,
	  			archivedAt: Date,
	  		} 
	  	}
	);
	
	var Image = mongoose.model('Image', imageSchema );

	return Image;
}
