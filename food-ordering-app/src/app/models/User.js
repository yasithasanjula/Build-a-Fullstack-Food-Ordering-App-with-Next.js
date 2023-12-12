import {Schema} from 'mangoose';

const UserSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {
        type: String, 
        required: true, 
        validate: pass=>{
            if (!pass?.length || pass.length < 5){
                new Error('password must be al least 5 characters');
            }
        },
     },
}, {timestamps: true});

export const User =model?.User || model('User', UserSchema);

