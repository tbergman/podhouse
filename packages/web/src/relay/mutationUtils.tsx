import {
  ConnectionHandler,
  RecordProxy,
  RecordSourceSelectorProxy,
} from "relay-runtime";

type ConnectionUpdater = {
  store: RecordSourceSelectorProxy;
  parentId: string;
  connectionName: string;
  edge: RecordProxy;
  before?: boolean;
};

export function connectionUpdater({
  store,
  parentId,
  connectionName,
  edge,
  before = false,
}: ConnectionUpdater) {
  if (edge) {
    if (!parentId) {
      console.log("maybe you forgot to pass a parentId: ");
      return;
    }

    const parentProxy: RecordProxy = store.get(parentId) as RecordProxy;
    const conn = ConnectionHandler.getConnection(parentProxy, connectionName);
    if (!conn) {
      console.log(
        "maybe this connection is not in relay store: ",
        connectionName,
      );
      return;
    }

    if (before) {
      ConnectionHandler.insertEdgeBefore(conn, edge);
    } else {
      ConnectionHandler.insertEdgeAfter(conn, edge);
    }
  }
}

type ConnectionDeleteEdgeUpdaterOptions = {
  parentId: string;
  connectionName: string;
  nodeId: string;
  store: RecordSourceSelectorProxy;
  filters?: object;
};
export function connectionDeleteEdgeUpdater({
  parentId,
  connectionName,
  nodeId,
  store,
}: ConnectionDeleteEdgeUpdaterOptions) {
  const parentProxy: RecordProxy = store.get(parentId) as RecordProxy;
  const conn = ConnectionHandler.getConnection(parentProxy, connectionName);

  if (!conn) {
    console.warn(`Connection ${connectionName} not found on ${parentId}`);
    return;
  }

  ConnectionHandler.deleteNode(conn, nodeId);
}
