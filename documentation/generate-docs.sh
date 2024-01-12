
help()
{
    echo "Usage: "
    echo "\t$0 split \t: split into klay, eth, debug, etc namespaces"
    echo "\t$0 \t\t: merge all specs"
}

if [ $# -lt 1 ]
then
    yarn build index@v1.0.0 -o ./web3rpc.yaml
elif [ "$1" == "split" ]
then
    yarn build klay@v1.0.0 -o ./web3rpc-klay.yaml
    yarn build eth@v1.0.0 -o ./web3rpc-eth.yaml
    yarn build debug@v1.0.0 -o ./web3rpc-debug.yaml
    yarn build etc@v1.0.0 -o ./web3rpc-etc.yaml
else
    help
fi

yarn remove_query_param
