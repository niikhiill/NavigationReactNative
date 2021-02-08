import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, Image, ActivityIndicator} from "react-native";

export default class PaginationScreen extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: [],
            page: 1,
            isLoading: false
        }
    }

componentDidMount(){
    this.setState({isLoading: true}, this.getData)
}   

    getData = async()=> {
        const url = "https://jsonplaceholder.typicode.com/photos?_limit=10&_page=" + this.state.page;
        fetch(url)
        .then((res)=> res.json())
        .then((resJson)=> {
            this.setState({ 
                data: this.state.data.concat(resJson),  
                isLoading: false
            }) 
        })
    }

    renderRow = ({item})=> {
        return(
            <View style = {styles.itemRow}>
                <Image source= {{uri: item.url}} style= {styles.itemImage}/>
                <Text style = {styles.itemText}>{item.title}</Text>
                <Text style = {styles.itemText}>{item.id}</Text>
            </View>
        )
    }

    renderFooter = ()=> {
        return(
            this.state.isLoading?
         <View style = {styles.loader}>
             <ActivityIndicator/>
         </View>:null
        )
    }

    handleLoadMore = ()=>{
        this.setState({page: this.state.page + 1, isLoading: true}, this.getData)
    }

    render(){
        return(
            <FlatList style = {styles.container}
            data = {this.state.data}
            renderItem = {this.renderRow}
            keyExtractor = {(item, index) => index.toString()}
            onEndReached= {this.handleLoadMore}
            onEndReachedThreshold= {0.1}
            ListFooterComponent = {this.renderFooter}
            />

        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,

    },
    itemRow: {
        borderBottomColor: "#ccc",
        marginBottom: 10,
        borderBottomWidth: 1 
    },
    itemText: {
        fontSize: 16,
        padding: 5
    },
    itemImage: {
        width: '100%',
        height: 200
    },
    loader: {
        marginTop: 10,
        alignItems: "center"
    }
})