import { ActiveState } from "./ActiveState";
import { ExpiredState } from "./ExpiredState";
import { DeletedState } from "./DeletedState";
import { SuspendedState } from "./SuspendedState";
import { User } from "./User";

let user: User = new User(new ActiveState());

console.log(user.watchVideo("videos de gatos"));

console.log(user.setState(new ExpiredState()));
console.log(user.watchVideo("videos de gatos"));

console.log(user.setState(new SuspendedState()));
console.log(user.watchVideo("videos de gatos"));

console.log(user.setState(new DeletedState()));
console.log(user.watchVideo("videos de gatos"));
