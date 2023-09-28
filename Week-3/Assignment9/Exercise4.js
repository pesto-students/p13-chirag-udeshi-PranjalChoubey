<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
       
    </head>
    <body>
    <!-- <script> is used for javascript -->
        <script>
            //JavaScript function 
            function calcWordFrequencies()
            {
                //prompting user for the list of words
                var the_list_of_words=prompt("Enter the list of words (separated by spaces) : ");
                //This will split the list of words based on the space 
                var words_list=the_list_of_words.split(" ");
                //This will create the associative array
                var list_of_words_array=new Object();
                //using the for loop
                for(var r=0;r<words_list.length;r++)
                {
                    //this variable will store each word count 
                    var the_word_count=0;
                    for(var s=0;s<words_list.length;s++)
                    {
                        //checking the each word 
                        if(words_list[r]==words_list[s])
                        {
                            //when both the word match then
                            the_word_count++;//increment the the_word_count 
                        }
                    }  
                    //assign the word count in associative array
                    list_of_words_array[words_list[r]]=the_word_count;
                }
               //using the for loop
                for(var r=0;r<words_list.length;r++)
                {   
                    //loop through the associative array list_of_words_array
                    for(each_word in list_of_words_array)
                    {   
                        //checking both the arrays
                        if(words_list[r]==each_word)
                                //print the word and the count of word.
                                console.log(words_list[r]+" "+list_of_words_array[each_word]);
                    }
                }
                
            }
            //function call 
            calcWordFrequencies();
        </script>
    </body>
</html>