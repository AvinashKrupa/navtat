import boto3
import os
 
def upload_files(path):
    session = boto3.Session(
        aws_access_key_id='AKIATB5L3J7VAWWFMUFP',
        aws_secret_access_key='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',
        region_name='ap-south-1'
    )
    s3 = session.resource('s3')
    bucket = s3.Bucket('www.wisdomconsultancy.shop')
 
    for subdir, dirs, files in os.walk(path):
        for file in files:
            full_path = os.path.join(subdir, file)
            with open(full_path, 'rb') as data:
                bucket.put_object(Key=full_path[len(path)+1:], Body=data)
 
if __name__ == "__main__":
    upload_files('/var/lib/jenkins/workspace/navtatva/out')
