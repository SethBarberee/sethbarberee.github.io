read -p 'New Post Name: ' TITLE # get input from user

TITLE_DASH=${TITLE// /-} # replace spaces with dashes

DATE=$(date +%Y-%m-%d) # get current date

NEW_POST="$DATE-$TITLE_DASH.md" # set up the post

# Set up the post with the right header
cd _posts

echo "---" >> $NEW_POST
echo "layout: post" >> $NEW_POST
echo "title: "$TITLE"" >> $NEW_POST
echo "date: $DATE" >> $NEW_POST
echo "tags: []" >> $NEW_POST
echo "---" >> $NEW_POST
