import { Meteor } from "meteor/meteor";
import { WalletsCollection } from "../Collections/WalletsCollection";


Meteor.publish('myWallet', function publishWallets() {
  const { userId } = this;
  if (!userId) {
    throw new Meteor.Error('Access denied');
  }
  return WalletsCollection.find({ userId });
});