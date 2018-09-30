function GETGOTO()
{
    var config=location.search.match(/goto=\s?\w{1,}/);
    if( !config )
        return false;
    return config[0].substring(5);
}
