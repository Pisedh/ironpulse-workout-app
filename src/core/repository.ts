import Dexie, {type Table} from 'dexie';
import type { Snapshot } from './models';
interface Record {id:string;data:Snapshot}
class IronDatabase extends Dexie {workspace!:Table<Record,string>;constructor(){super('ironpulse-local-v1');this.version(1).stores({workspace:'id'});}}
const db=new IronDatabase();
// One atomic snapshot is intentional for the single-workspace foundation.
// Authenticated, normalized multi-profile stores are a later schema migration.
export const repository={async load(){return (await db.workspace.get('personal'))?.data;},async save(data:Snapshot){await db.workspace.put({id:'personal',data:JSON.parse(JSON.stringify(data))});},async clear(){await db.workspace.clear();}};
