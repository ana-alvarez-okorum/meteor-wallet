import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { ContactsCollection } from "../Collections/ContactsCollection";

Meteor.methods({
  'contacts.insert'({ name, email, imageUrl, walletId }) {
    const { userId } = this;
    if (!userId) {
      throw new Meteor.Error('Access denied');
    }
    check(name, String);
    check(email, String);
    check(imageUrl, String);
    check(walletId, String);
    if (!name) {
      throw new Meteor.Error('Name is required.');
    }
    if (!walletId) {
      throw new Meteor.Error('Wallet ID is required.');
    }
    return ContactsCollection.insert({
      name,
      email,
      imageUrl,
      walletId,
      createdAt: new Date(),
      userId,
    });
  },
  'contacts.archive'({ contactId }) {
    check(contactId, String);
    ContactsCollection.update({ _id: contactId }, { $set: { archived: true } });
  },
});